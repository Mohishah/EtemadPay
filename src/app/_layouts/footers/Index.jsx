import FooterLayoutDefault from "./LayoutDefault";

const Footer = async ({ layout }) => {
const social = await getSocial()
const address = await getAddress()

  switch (layout) {
    case 1:
      return;
    case 2:
      return;
    default:
      return <FooterLayoutDefault social={social} address={address} />;
  }
};
export default Footer;

const getSocial = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/blog/social" , {
    next:{
      revalidate: 10
    }
  })
  const social =await res.json()
  return social
}

const getAddress = async ()=>{
  const res =await fetch("http://127.0.0.1:8000/contact" , {
    next:{
      revalidate: 10
    }
  })
  const address =await res.json()
  return address
}
