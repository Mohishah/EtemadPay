"use client";

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Alert } from '../_lib/alert';


const initialValues = { 
    email: '', 
    name: '', 
    tel: '', 
    fullName: '', 
    message: '' 
}

const validationSchema = Yup.object({
    email:Yup.string().required('لطفا این قسمت را پر کنید').email("لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb"),
    message:Yup.string().required('لطفا این قسمت را پر کنید')
})

 
const ContactForm = ( { subtitleOffset } ) => {
  return (
    <>
        {/* contact form */}
        <Formik
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {( values, { setSubmitting } ) => {
            const form = document.getElementById("contactForm");
            const data = new FormData();

            data.append('name', values.name);
            data.append('email', values.email);
            data.append('tel', values.tel);
            data.append('fullName', values.fullName);
            data.append('message', values.message);

            fetch("http://127.0.0.1:8000/contact/", {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.status === 200) {
                    Alert('با تشکر' ,'درخواست شما دریافت شد', 'success');
                    form.reset()
                } else {
                    Alert('متاسفانه' ,'متاسفانه مشکلی رخ داده است', 'error');
                }
            }).catch(error => {
                Alert('متاسفانه' ,'متاسفانه مشکلی رخ داده است', 'error');
            });

            setSubmitting(false);
        }}
        >

        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
        }) => (
        <Form id="contactForm" className={subtitleOffset ? "mil-mt-suptitle-offset mil-mb-90 cform" : "mil-mb-90 cform"}>
            <div className="row">
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>نام</span><span className="mil-required">*</span></label>
                        <input 
                            type="text" 
                            placeholder="نام خود را وارد کنید"
                            name="name" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                        />
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>نام خانوادگی</span><span className="mil-required">*</span></label>
                        <input 
                            type="text" 
                            placeholder="نام خانوادگی خود را وارد کنید"
                            name="fullName" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullName} 
                        />
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>شماره تماس</span><span className="mil-required">*</span></label>
                        <input 
                            type="tel" 
                            placeholder="شماره خود را وارد کنید"
                            name="tel"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tel}
                            dir='rtl' 
                        />
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>ایمیل</span><span className="mil-required">*</span></label>
                        <input 
                            type="email" 
                            placeholder="آدرس ایمیل خود را وارد کنید"
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                        />
                    </div>

                </div>
                <div className="col-lg-12">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>پیام شما</span><span className="mil-required">*</span></label>
                        <textarea 
                            placeholder="پیام خود را وارد کنید..."
                            name="message" 
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message} 
                        />
                    </div>

                </div>
                <div className="col-lg-12">

                    <div className="mil-checbox-frame mil-dark-input mil-up mil-mb-30">
                        <input defaultChecked className="mil-checkbox" id="checkbox-1" type="checkbox" value="value" namge="agree" required />
                        <label htmlFor="checkbox-1" className="mil-text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</label>
                    </div>

                </div>
                <div className="col-lg-12">

                    <button type="submit" className="mil-button mil-up">ارسال</button>

                </div>
            </div>
        </Form>
        )}
        </Formik>
        {/* contact form end */}
    </>
  );
};
export default ContactForm;