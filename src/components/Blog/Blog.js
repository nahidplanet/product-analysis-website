import React from 'react';

const Blog = () => {
    return (
        <div className='p-24'>
            <div className="question-1 px-4 py-3 mt-8  border-2 rounded-md">
                <h2 className='font-semibold text-2xl capitalize mb-3'>What Is Context API ?</h2>
                <h3><span className='text-[#EA6F5F]'>Answer : </span>
                    <span>Context API হলো React এর জন্য একটি মাধ্যম যার দ্বারা props drilling করে parents to children ডাটা না পাঠিয়ে একটি নির্দিষ্ট বলয়ে ডাটা পাঠানো যায়। <br />
                        অর্থাৎ ,  Contexts API একটি গ্লোবাল ভেরিয়েবল তৈরি করে একটি  নির্দিষ্ট বলয়ের মধ্যে স্বাচ্ছন্দ্যে ডাটা পাঠাতে পারে।.</span>

                </h3>
            </div>
            <div className="question-1 px-4 py-3 mt-8  border-2 rounded-md">
                <h2 className='font-semibold text-2xl capitalize mb-3'>What Is Semantic ?</h2>
                <h3><span className='text-[#EA6F5F]'>Answer : </span>
                    <span>Semantic Tag হলো HTML এর এমন কিচু মার্কআপ যা শুধু webpage এ উপস্থাপনার পরিবর্তে webpage এর এর অর্থের পরিচয়ও বহন করে।
                        উদাহরণ সরূপ বলা যাই যে,
                        {`<div id="nav"> <div class="header"> <div id="footer">`}
                        পূবে এভাবে ব্যবহার করা হতো। এতে করে ডেভলপার কিংবা ব্রাউজার তা ঠিকমত বুঝতে পারতো না। <br />

                        তাই ব্রাউজার এবং একই সাথে ডেভলপার যাতে কোড দেখেই বুঝতে পারে এমন আলাদা আলাদা পার্টে কিছু ট্যাগ দারা HTML মার্কআপকে ভাগ করা হলো।<br />
                        যেমন: <br />
                        {`<article> ,<aside>,<details>,<figcaption>,<figure>,<footer>,<header>,<summary>,<nav>,<section>`}

                        <br />
                        এগুলোকেই মুলত semantic Tag বলা হয়.
                        <br />
                    </span>

                </h3>
            </div>
            <div className="question-1 px-4 py-3 mt-8  border-2 rounded-md">
                <h2 className='font-semibold text-2xl capitalize mb-3'>what difference between inline, block, and inline?</h2>
                <h3><span className='text-[#EA6F5F]'>Answer : </span>
                    <span>
                        block elements হলো এমন সব element  য়া ওয়েবপেইজের বাম থেকে ডান পুরো জায়গাটা (১০০%  width) দখল করে।ফলে দুটি block elements  পাশাপাশি বসালে তা ২টি লাইনে(উপর- নিচে) বিভক্ত হয়। যেমন: <br />
                        {`<div>, <p>, <h1> to <h6>`} হলো block elements. <br />
                        inline element হলো block elements এর বিপরীত | অর্থাৎ কন্টেন্ট যতটুকু হবে inline element এর width ততটুকুই হবে।দুটি inline element কখনো দুটি লাইন বসে না (উপর-নিচে)।তারা সর্বদাই পাশাপাশি অবস্থান করে।<br />
                        <li>তাছাড়া inline element গুলো block element এর মধ্যে লেখা যায়।</li>
                        <li>যেকোনো ধরনের border-padding দেওয়া যাই inline element এ</li>
                        তবে inline element এ কোনো ফিক্সড width বা height  দেওয়া যাই না। আর এরই  ফলে inline block element ব্যআহার করা হয়।<br />
                        যেমনঃ {`<a> <button> <input> `}ইত্যাটি online element <br />  <br />
                        inline element কে ফিক্সড width height  দিয়ে block element এর মত করে ব্যবহার করার জন্যই inline-block element ব্যবহার করা হয়ে থাকে। <br />
                    </span>

                </h3>
            </div>
        </div>
    );
};

export default Blog;