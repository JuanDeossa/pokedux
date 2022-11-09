export const logger=(store)=>(next)=>(action)=>{
  console.log(action)
  next(action)
}

export const myFirstPokemon=(store)=>(next)=>(actionInfo)=>{
  next({
    ...actionInfo,
    action:{
      ...actionInfo.action,
      payload:
        actionInfo.action.payload.map(pokemon=>({
          ...pokemon,
          name:`Pokemon:\n${pokemon.name}`
        })
      )
    }
  })
}
