const products = [
    {
        id: 1,
        name: 'Artikel 1',
        href: 'https://www.freepik.com/free-photos-vectors/wallpaper',
        imageSrc: 'https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, maxime!',
    },
    {
        id: 2,
        name: 'Artikel 2',
        href: 'https://pixabay.com/images/search/wallpaper/',
        imageSrc: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, maxime!',
    },
    {
        id: 3,
        name: 'Artikel 3',
        href: 'https://www.freepik.com/free-photos-vectors/background-wallpaper',
        imageSrc: 'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, maxime!',
    },
    // More products...
]

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Artikel</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                    {products.map((product) => (
                        <div key={product.id} className="group relative shadow-md p-2 rounded-md">
                            <h1 className="text-xl font-bold mb-2">
                                {product.name}
                            </h1>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-900 mb-5">{product.desc}</p>
                            </div>
                            <div>
                                <button type="button" class="flex w-full mt-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <a href={product.href}>Open</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
