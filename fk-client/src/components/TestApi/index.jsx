import {useState} from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {username, password}
                )
            });

            if (response.ok) { // Lida com o login bem-sucedido
                console.log('Login bem-sucedido');
            } else { // Lida com credenciais inválidas ou outros erros
                console.error('Credenciais inválidas');
            }
        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome de Usuário:
                <input type="text"
                    value={username}
                    onChange={
                        (e) => setUsername(e.target.value)
                    }
                    required/>
            </label>
            <br/>
            <label>
                Senha:
                <input type="password"
                    value={password}
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                    required/>
            </label>
            <br/>
            <button type="submit">Entrar</button>
        </form>
    );
}

export default LoginForm;
