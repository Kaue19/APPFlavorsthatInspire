import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(false);
    const [carrinho, setCarrinho] = useState([]);
    const [Favoritar, setFavoritar] = useState([]);

    // Função para calcular o total do carrinho
    const calcularTotal = () => {
        const total = carrinho.reduce((acc, item) => acc + item.produtoPreco * item.quantidade, 0);
        return total;
    };

    // Função para adicionar item aos favoritos
    function addFavoritar(item) {
        const newCart = [...Favoritar, item];
        setFavoritar(newCart);
    }

    // Função para adicionar item ao carrinho
    function addCarrinho(item) {
        const newCart = [...carrinho, { ...item, quantidade: 1 }]; // Inicia com quantidade 1
        setCarrinho(newCart);
    }

    // Função para remover item do carrinho
    function removerDoCarrinho(productId) {
        const newCart = carrinho.filter(item => item.produtoId !== productId);
        setCarrinho(newCart);
    }

    // Função para remover item dos favoritos
    function Desfavoritar(favoriteId) {
        const newCart = Favoritar.filter(item => item.produtoId !== favoriteId);
        setFavoritar(newCart);
    }

    // Função para atualizar a quantidade de um produto no carrinho
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
            atualizarQuantidade: atualizarQuantidade // Adicionando a função ao contexto
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
