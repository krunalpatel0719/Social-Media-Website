import InputBox from "./InputBox"
import Posts from "./Posts";

function Feed({ posts }) {
    return(
        <div className="flex-grow  pb-44 pt-6 mr-4
        xl:mr-40 overflow-y-auto ">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl ">
                {/**Input Box */}
                <InputBox />
                {/**Posts */}
                <Posts posts={posts} />
            </div>
        </div>
    )
}

export default Feed