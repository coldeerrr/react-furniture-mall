import AppRouter from './router'

const toRender = true

const App = () => {
    return (
        <>
            <AppRouter toRender={toRender}/>
        </>
    )
}

export default App