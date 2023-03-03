import { HeroList } from "../components"

export const Marvel = () => {
  return (
    <>
      <h1 className="titulos">Marvel Comics</h1>
      <hr className="titulos"/>

      <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}
