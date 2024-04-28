import NavLink from "@/components/nav-link"

const page = () => {
  return (
    <div>
      <h1>products</h1>
      <div>
        <NavLink href='/products/1'>product1</NavLink>
        <NavLink href='/products/2'>product2</NavLink>
      </div>
    </div>
  )
}

export default page