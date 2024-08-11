"use client";

import React, { useState } from 'react';

import { Alert } from '../_lib/alert';
import { useRouter } from 'next/navigation';

const ReplyForm = ({id}) => {

    const router = useRouter()

    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [email, setEmail] = useState('');
    const [post, setPost] = useState(id)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch(`http://127.0.0.1:8000/blog/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, body, email, post }),
        });
        if (response.status === 200) {
            Alert('با تشکر' ,'درخواست شما دریافت شد', 'success');
            setName('')
            setEmail('')
            setBody('')
            router.push(`/blog/${id}`)
        } else {
            Alert('متاسفانه' ,'متاسفانه مشکلی رخ داده است', 'error');
        }
    };

    return (
                <form onSubmit={handleSubmit} id='contactForm'>
                  <div className="row justify-content-between">
                      <div className="col-lg-6">

                          <div className="mil-mb-60">
                              <h3 className="mil-upper mil-up mil-mb-10">نظر دهید ...</h3>

                              <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                  <label className="mil-upper"><span>نظر خود را بنویسد ...</span><span className="mil-required">*</span></label>
                                  <textarea 
                                    cols="30" 
                                    rows="10"
                                    placeholder="پیام خود را وارد کنید..."
                                    name="body" 
                                    required="required"
                                    onChange={(e) => setBody(e.target.value)}
                                    value={body} 
                                  />

                              </div>
                          </div>

                      </div>
                      <div className="col-lg-6">

                          <div className="row align-items-end mil-mt-suptitle-offset">
                              <div className="col-lg-6">

                                  <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                      <label className="mil-upper"><span>نام و نام خانوادگی</span><span className="mil-required">*</span></label>
                                      <input 
                                        type="text" 
                                        placeholder="نام و نام خانوادگی خود را وارد کنید"
                                        name="name" 
                                        required="required" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}                    
                                      />
                                  </div>

                              </div>
                              <div className="col-lg-6">

                                  <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                      <label className="mil-upper"><span>آدرس ایمیل</span><span className="mil-required">*</span></label>
                                      <input 
                                        type="text" 
                                        placeholder=" قالب ایمیل را رعایت کنید : aa@bb.cc"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email} 
                                      />
                                  </div>
                                  

                              </div>
                              
                              <div className="col-lg-6 mt-5">

                                  <div className="mil-up mil-mb-30">
                                      <button type="submit" className="mil-button mil-fw">ثبت نظر</button>
                                  </div>

                              </div>
                          </div>
                      </div>

                  </div>
                </form>  
    );
}

export default ReplyForm;
