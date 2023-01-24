import footerStyles from './footer.module.css'
export const Footer = ({clearAllTodos}) => {
    return(
        <footer className="d-flex justify-content-center">
           
            <button 
            onClick={clearAllTodos}
            type="submit" 
            className="btn btn-secondary">
    Clear all
    </button>
        </footer>
    )
}
