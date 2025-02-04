import "./ProductCard.css";

import { Button } from "../../components/ui/button";
import { useEffect, useRef } from "react";

export type ProductCardProps = {
  title: string;

  subtitle?: string;
  imageSrc: string;
  size: {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    custom?: string;
  };
};

function ProductCard(props: ProductCardProps) {
  const { title, subtitle, imageSrc, size }: ProductCardProps = props;
  // const componentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // const productCard: HTMLDivElement|null  = document.querySelector(".productCard");

  //   if (componentRef.current) {
  //     const productCard: HTMLDivElement|null  = componentRef.current.querySelector(".productCard");
  //     // const element = componentRef.current.querySelector('.some-class');
  //     // Use the element as needed
  //     console.log( 'product card',productCard?.style.backgroundImage)

  //   if(productCard && productCard.style) {
  //     productCard.style.backgroundImage = `url(${imageSrc})`;
  //     console.log( 'not null')
  //     console.log( 'product card',productCard?.style.backgroundImage)

  //   }
  //   }
    
  // }, [])

  const backgroundImageStyles: React.CSSProperties = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '80vh', // Adjust as needed
  };

  return (
    <div
      style={backgroundImageStyles}
      // ref={componentRef}
      id="productCard"
      className={`productCard h-[${
        (size.sm || size.md || size.lg || size.custom) ?? "570px"
      }] flex z-0 w-full mb-4`}
    >
      <div className="z-10 h-fit text-white text-center ml-auto mr-auto mt-12">
        <h1 className="text-5xl font-bold mt-2">{title}</h1>
        <p className="text-2xl">{subtitle}</p>
        {/* <Button className='bg-blue-500 hover:border-blue-500' variant={'chip'}>Button</Button> */}
        
        <button className="btn bg-blue-500 rounded-3xl pt-2 pb-2 pl-6 pr-6 m-2 mt-6 text-lg">Learn More</button>
        <button className="btn text-blue-500 hover:text-white border-solid border-2 border-blue-500 bg-transparent hover:bg-blue-500 rounded-3xl pt-2 pb-2 pl-6 pr-6 m-2 text-lg">Buy</button>
        {/* <button className="btn border-blue-500 hover:bg-blue-500 rounded-3xl">
          Button
        </button> */}
        
      </div>
      {/* <img src={imageSrc} alt="" className='h-[570px] w-full object-cover absolute top-0 left-0' /> */}
    </div>
  );
}

export default ProductCard;
