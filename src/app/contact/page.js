export default function Contact(){
    return (
        <>
            <div>
                <h2 className="text-center text-3xl w-full py-4 font-bold">Get In Touch</h2>
                <p className="text-center mx-auto w-2/6     ">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
            </div>

            <div className="flex mt-16">
                <div className="md:w-3/4 px-4">
                <div className="bg-white p-10 rounded-x1">
                    <h3 className="text-2x1 py-2">Leave a message</h3>
                    <div className="flex gap-6">
                        <div className="w-full">
                            <label>Name</label>
                            <input type="text" className="border my-input-text w-full"></input>
                        </div>
                        <div className="w-full">
                            <label>Email</label>
                            <input type="text" className="border my-input-text w-full"></input>
                        </div>
                        </div>
                        <div className="w-full my-2">
                            <label>Subject</label>
                            <input type="text" className="my-input-text w-full"></input>
                        </div>
                        <div className="w-full">
                            <label>Message</label>
                            <textarea className="border my-input-text w-full"></textarea>
                        </div>
                        <div className="w-full py-2">
                            <button className="mx-1 h-9 items-center justify-center px-4 rounded-md bg-amber-500">
                                <label>Send Message</label>
                            </button>
                        </div>
                    </div>
                
            </div>
                <div className="md:w-1/3 border p=10">kanan</div>
            </div>
        </>
    );
}