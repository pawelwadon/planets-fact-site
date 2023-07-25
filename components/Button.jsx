const Button = ({action,header,color,number})=>{
    
const activeVariants={
    mercury:'focus:bg-[var(--mercury-color)] focus:border-[color:var(--mercury-color)]',
    venus:'focus:bg-[var(--venus-color)] focus:border-[color:var(--venus-color)]',
    earth:'focus:bg-[var(--earth-color)] focus:border-[color:var(--earth-color)]',
    mars:'focus:bg-[var(--mars-color)] focus:border-[color:var(--mars-color)]',
    jupiter:'focus:bg-[var(--jupiter-color)] focus:border-[color:var(--jupiter-color)]',
    saturn:'focus:bg-[var(--saturn-color)] focus:border-[color:var(--saturn-color)]',
    uranus:'focus:bg-[var(--uranus-color)] focus:border-[color:var(--uranus-color)]',
    neptune:'focus:bg-[var(--neptune-color)] focus:border-[color:var(--neptune-color)]',
}

const shadowColors={
    mercury:'sm:focus:shadow-[inset_0px_-13px_0px_-10px_var(--mercury-color)]',
    venus:'sm:focus:shadow-[inset_0px_-13px_0px_-10px_var(--venus-color)]',
    earth:'sm:focus:shadow-[inset_0px_-13px_0px_-10px_var(--earth-color)]',
    mars:'sm:focus:shadow-[inset_0px_-13px_0px_-10px_var(--mars-color)]',
    jupiter:'sm:focus:shadow-[inset_0px_-13px_0px_-10px_var(--jupiter-color)]',
    saturn:'sm:focus:shadow-[inset_0px_-13px_0px_-10px_var(--saturn-color)]',
    uranus:'sm:focus:shadow-[inset_0px_-13px_0px_-10px_var(--uranus-color)]',
    neptune:'sm:focus:shadow-[inset_0px_-13px_0px_-10px_var(--neptune-color)]',
}

    return(
        <button onClick={action} className={`group ${activeVariants[color]} w-full p-4 my-2 text-left border border-[color:var(--grey)] hover:bg-[var(--grey)] ease-in duration-150 sm:border-none sm:focus:bg-[var(--main)] sm:focus:border-none ${shadowColors[color]} sm:text-[color:var(--grey)] sm:focus:text-white sm:text-center`}> <span className="px-3 text-[color:var(--grey)] group-hover:text-[color:var(--light-grey)] sm:hidden">{number}</span> {header} </button>
    )
}

export default Button;