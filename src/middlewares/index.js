export const logger=(store)=>(next)=>(action)=>{
  console.log(action)
  next(action)
}

export const myFirstPokemon=(store)=>(next)=>(actionInfo)=>{
  next({
    ...actionInfo,
    action:{
      ...actionInfo.action,
      payload:[{name:'First Pokemon',},...actionInfo.action.payload]
    }
  })
}
