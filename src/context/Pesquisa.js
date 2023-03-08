import {createContext,useContext,useState} from "react"

export const PesquisaContext  = createContext();
PesquisaContext.displayName = "Pesquisa";

export default function PesquisaProvider({children}) {
    const [pesquisa,setPesquisa] = useState([]);

    return (
        <PesquisaContext.Provider value = {{pesquisa,setPesquisa}} >
            {children}
        </PesquisaContext.Provider>
    )
}

export function usePesquisaContext() {
    const { pesquisa, setPesquisa} = useContext(PesquisaContext);
 
    function adicionarItem(novoItem) {
        const itemExistente = pesquisa.some(item => item.id === novoItem) ;
        let novosItens = [...pesquisa];
        if (!itemExistente) {
            novosItens.push(novoItem);
            return setPesquisa(novosItens)
        }
        novosItens.splice(novosItens.indexOf(novoItem),1);
        return setPesquisa(novosItens);
    }

    return {
        pesquisa,adicionarItem
    }
}