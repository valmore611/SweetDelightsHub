import images from '../src/images';

export function DessertRecipe ({nameImage="Recipe", nameRecipe="Recipe", contentRecipe="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda."}) {
  return (
    <div className="swiper product-row">
      <div className="swiper-slide box">   
        <div className="img">
            <img src={nameImage} alt={`${nameImage}`}/>
        </div>
        <div className="product-content">
            <h3> {nameRecipe} </h3>
            <p>
              "{contentRecipe}"
            </p>
            <div className="orderNow">
              <button>Order Now </button>
            </div> 
        </div>
      </div>
    </div>
  )
}