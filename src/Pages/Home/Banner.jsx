import { useEffect, useState } from "react";

const Banner = () => {
  const [pictues, setPictues] = useState(null);


  const bannerPictures = [
    "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585296910838-ff8e46ea7979?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1598751337485-0d57b0c50b83?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1547393027-a632f1004ad6?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  let len = bannerPictures.length;
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("hello");
      
      if(len <= 0){
        len = bannerPictures.length - 1;
      }else{
        len--;
      }

      const pic = bannerPictures[len];
      setPictues(pic);
      console.log(pic, len);

    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div
        className="hero h-[500px] bg-center bg-no-repeat "
        style={{
          backgroundImage:
            `url(${pictues})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
