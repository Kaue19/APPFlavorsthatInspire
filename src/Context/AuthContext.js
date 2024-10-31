import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser ] = useState(false);
    const [carrinho, setCarrinho ] = useState([]);

    function addCarrinho(item)
    {
        const newCart = [ ...carrinho , item ];
        setCarrinho( newCart );
    }

    function removerDoCarrinho(productId) {
        // Filtra o array de produtos, removendo o item com o ID correspondente
        const newCart = carrinho.filter(item => item.id !== productId);
        setCarrinho(newCart);
      }

    async function Login(email, senha) {

        if (email != "" && senha != "") {
            await fetch( process.env.EXPO_PUBLIC_URL + 'api/Usuario/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            })
                .then(res => (res.ok == true) ? res.json() : false)
                .then(json => {
                    if( json.usuarioId > 0 ) {
                        setUser( json );
                        setLogado(true);
                    } else {
                        setError( true );
                    }
                }
                )
                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error, user: user, carrinho: carrinho, addCarrinho: addCarrinho, removerDoCarrinho  }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;