export function till( ms :number ) {
  return new Promise( resolve => {
    setTimeout( () => resolve( true ), ms )
  })
}