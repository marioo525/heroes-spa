import { HeroList } from "../components"

export const DC = () => {
  return (
    <>
      <h1 className="titulos">DC Comics</h1>
      <hr className="titulos"/>

      <HeroList publisher='DC Comics'/>
    </>
  )
}
