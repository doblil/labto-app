
export  const useMenuContext = (params) => {
    if(params?.type === 'reag' && params?.isolate === 'false') return 'reag'
    if(params?.type === 'reag' && params?.isolate === 'true') return 'reagIsol'
    if(params?.type === 'rs' && params?.isolate === 'false') return 'rs'
    if(params?.type === 'rs' && params?.isolate === 'true') return 'rsIsol'
    if(params?.type === 'subst' && params?.isolate === 'false') return 'subst'
    if(params?.type === 'subst' && params?.isolate === 'true') return 'substIsol'
    if(params?.type === 'hplc' && params?.isolate === 'false') return 'hplc'
    if(params?.type === 'gc' && params?.isolate === 'false') return 'gc'
    if(params?.type === 'all' && params?.isolate === 'true') return 'colIsol'
}