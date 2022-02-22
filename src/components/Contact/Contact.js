import React from 'react'

function Contact() {
  return (
   <div className='container'>
   <div className="row row-content">
   <div className="col-12">
      <h3>Location Information</h3>
   </div>
    <div className="col-12 col-sm-4 offset-sm-1">
           <h5>Our Address</h5>
            <address>
            121, Clear Water Bay Road
            Clear Water Bay, Kowloon
            HONG KONG
            <i className="fa fa-phone"></i>: +852 1234 5678
            <i className="fa fa-fax"></i>: +852 8765 4321
            <i className="fa fa-envelope"></i>:
                <a href="mailto:confusion@food.net">confusion@food.net</a>
         </address>
    </div>
    <div className="col-12 col-sm-6 offset-sm-1">
        <h5>Map of our Location</h5>
    </div>
    <div className="col-12 col-sm-11 offset-sm-1">
        <div className="btn-group" role="group">
            <a className="btn btn-primary" href="tel:+3809382937" role="button"><i className="fa fa-phone"></i> Call</a>
            <a className="btn btn-info" href="/" role="button"><i className="fa fa-skype"></i> Skype</a>
            <a className="btn btn-success" href="mailto:confusion@food.com" role="button"><i className="fa fa-envelope-o"></i> Email</a>
        </div>
    </div>
</div>
</div>
  )
}

export default Contact