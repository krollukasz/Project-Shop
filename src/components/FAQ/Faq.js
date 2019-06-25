import React from "react";

// Import styles
import "./Faq.scss";

const Faq = () => (
  <div className="faq">
    <h1 className="faq-header">Frequently Asked Questions</h1>
    <div className="faq-question-answer">
      <p className="faq-question">
        Q: Donec ut tempor tortor, eget feugiat odio. Duis ut aliquam ipsum ?
      </p> 
      <p className="faq-answer">
        A: Curabitur non consectetur augue. Donec in arcu luctus, porttitor mi nec, consequat nibh. Etiam non ipsum vel elit mattis aliquam. Praesent volutpat convallis nisi eu euismod.
      </p> 
    </div>
    <div className="faq-question-answer">
      <p className="faq-question">
        Q: Nulla maximus iaculis dolor, nec tempor nisl interdum ut ?
      </p> 
      <p className="faq-answer">
        A: Pellentesque sodales neque eget ligula venenatis, a posuere ante consectetur. Nulla commodo sollicitudin ligula ac malesuada. Pellentesque scelerisque dui ex, eu feugiat tellus auctor suscipit.
      </p>
    </div>
    <div className="faq-question-answer">
      <p className="faq-question">
        Q: Suspendisse molestie eros efficitur condimentum vestibulum ?
      </p> 
      <p className="faq-answer">
        A: Donec tempor metus in diam aliquam tincidunt. Aenean et egestas orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in metus vehicula, mattis neque et, eleifend ante.
      </p> 
    </div>
    <div className="faq-question-answer">
      <p className="faq-question">
        Q: Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus ?
      </p> 
      <p className="faq-answer">
        A: Pellentesque sit amet justo quis ex commodo scelerisque vel hendrerit dolor. Pellentesque ullamcorper arcu sodales lorem consectetur mattis. Praesent viverra consequat odio, id ultricies tortor auctor eget.
      </p> 
    </div>
    <div className="faq-question-answer">
      <p className="faq-question">
        Q: Etiam volutpat porttitor molestie. Sed vulputate sapien ut suscipit tincidunt ?
      </p> 
      <p className="faq-answer">
        A: Sed placerat pulvinar turpis, ut molestie turpis vehicula eu. Vivamus elementum ligula libero, ac sollicitudin sapien ultricies sit amet. Fusce congue leo vitae magna posuere iaculis. Mauris non auctor tortor, in elementum orci.
      </p> 
    </div>
  </div>
);

export default Faq;
