import getImageURL from "../utils/image-util";

const hrefList = {
  whatsapp: "http://wa.me/#?text=Olá, gostaria de fazer um pedido.",
  instagram: "http://instagram.com/#",
  facebook: "http://facebook.com/#"
}

const SocialButton = ({name}: {name: string}) => {
  return ( 
    <a className="rounded-full bg-main text-white w-8 h-8 flex justify-center items-center" href={hrefList[name as keyof typeof hrefList]} >
      <img src={getImageURL(name)} alt={`${name}`} className={`${name === 'whatsapp'? 'h-[1.75rem]': 'h-6'}`}/>
    </a>
  );
}

export default SocialButton;