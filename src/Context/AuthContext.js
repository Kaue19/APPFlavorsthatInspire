import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(false);
    const [carrinho, setCarrinho] = useState([]);
    const [Favoritar, setFavoritar] = useState([]);


    const calcularTotal = () => {
        const total = carrinho.reduce((acc, item) => acc + item.produtoPreco * item.quantidade, 0);
        return total;
    };


    function addFavoritar(item) {

        if (!Array.isArray(Favoritar)) {
            setFavoritar([]);
        }


        const itemExistente = Favoritar.some(produto => produto.produtoId === item.produtoId);
        if (itemExistente) {
            alert('Produto já adicionado aos favoritos!');
        } else {
            const newFavoritos = [...Favoritar, item];
            setFavoritar(newFavoritos);
        }
    }


    function addCarrinho(item) {

        if (!Array.isArray(carrinho)) {
            setCarrinho([]);
        }


        const itemExistente = carrinho.some(produto => produto.produtoId === item.produtoId);
        if (itemExistente) {
            alert('Produto já adicionado ao carrinho!');
        } else {
            const newCarrinho = [...carrinho, { ...item, quantidade: 1 }];
            setCarrinho(newCarrinho);
        }
    }


    function removerDoCarrinho(productId) {
        const newCarrinho = carrinho.filter(item => item.produtoId !== productId);
        setCarrinho(newCarrinho);
    }


    function Desfavoritar(favoriteId) {
        const newFavoritos = Favoritar.filter(item => item.produtoId !== favoriteId);
        setFavoritar(newFavoritos);
    }

    function atualizarQuantidade(produtoId, delta) {
        setCarrinho(prevCarrinho => {
            return prevCarrinho.map(item => {
                if (item.produtoId === produtoId) {
                    const novaQuantidade = item.quantidade + delta;
                    if (novaQuantidade > 0) {
                        return { ...item, quantidade: novaQuantidade };
                    }
                }
                return item;
            });
        });
    }

    function limparCarrinho() {
        setCarrinho([]);
    }

    // Função de login
    async function Login(email, senha) {
        if (email !== "" && senha !== "") {
            await fetch(process.env.EXPO_PUBLIC_URL + 'api/Usuario/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            })
                .then(res => (res.ok === true) ? res.json() : false)
                .then(json => {
                    if (json.usuarioId > 0) {
                        setUser(json);
                        setLogado(true);
                    } else {
                        setError(true);
                    }
                })
                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{
            logado: logado,
            Login,
            error: error,
            user: user,
            carrinho: carrinho,
            addCarrinho: addCarrinho,
            removerDoCarrinho: removerDoCarrinho,
            Favoritar: Favoritar,
            addFavoritar: addFavoritar,
            Desfavoritar: Desfavoritar,
            calcularTotal: calcularTotal,
            setUser: setUser,
            atualizarQuantidade: atualizarQuantidade,
            limparCarrinho: limparCarrinho
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
