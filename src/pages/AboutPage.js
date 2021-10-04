import React from 'react'

const AboutPage = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>About Us</h1>
      <h3>Most Dashing Instructor</h3>
      <div className='row my-3'>
        <div className='col-md-4'>
          <img
            className='img-fluid'
            src='data:image/jpeg;base64,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'
            alt='ঝংকার মাহবুব'
          />
        </div>
        <div className='col-6 col-md-8'>
          <h1>ঝংকার মাহবুব</h1>
          <p>
            ঝংকার মাহবুব এক দশক ধরে প্রোগ্রমিং ও ওয়েব ডেভেলপমেন্টের সাথে জড়িত।
            বুয়েটের পড়ালেখা শেষ করার পর কম্পিউটার সায়েন্সে মাস্টার্স করেন
            আমেরিকার নর্থ ডেকোটা স্টেট ইউনিভার্সিটি। তারপর সিনিয়র ওয়েব ডেভেলপার
            হিসেবে দীর্ঘদিন ধরে কাজ করেছেন যুক্তরাষ্ট্রের নিলসেন কোম্পানিতে।
            বর্তমানে স্ত্রী কারিনা ইসলামসহ বসবাস করছেন যুক্তরাষ্ট্রের
            ক্যালিফোর্নিয়ার অঙ্গরাজ্যের সিলিকনভ্যালি এরিয়াতে। প্রোগ্রামিংকে সহজ,
            মজার ও গল্পের ছলে উপস্থাপন করা নিয়ে জনপ্রিয় তিনটা বই লিখে ফেলেছেন
            তিনি। বইগুলো হচ্ছে: হাবলুদের জন্য প্রোগ্রামিং, প্রোগ্রামিংয়ের বলদ
            টু বস, আর প্রোগ্রামিংয়ের চৌদ্দগোষ্ঠী। এছাড়াও দিক-নির্দেশনামূলক বই
            লিখেছেন: রিচার্জ your ডাউন ব্যাটারি ও প্যারাময় লাইফের প্যারাসিটামল।
            আর অবসর সময়ে, Jhankar Mahbub নামক ইউটিউব চ্যানেলে প্রোগ্রামিং ও
            স্টুডেন্টদেরজন্য দিক-নির্দেশনামূলক ভিডিও বানান।
          </p>
        </div>
      </div>
      <div className='row my-3'>
        <div className='col-md-4'>
          <img
            className='img-fluid'
            src='https://i2.wp.com/trydiscountcoupons.com/wp-content/uploads/2017/10/brad-traversy-instructor-udemy.jpg'
            alt='ঝংকার মাহবুব'
          />
        </div>
        <div className='col-6 col-md-8 sm-text-center'>
          <h1>Brad Traversy</h1>
          <p>
            React Native Crash Course 2020 ( youtube.com) Feb 04, 2020. In this
            course we will talk about what React Native is and get setup, look
            at some of the built in components and build a small shopping list
            app. Brad Traversy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
