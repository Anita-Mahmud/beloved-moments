import { Button, Label, Select, Textarea } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditReview = () => {
    const router = useParams();
  const [edit, setEdit] = useState({});
  const { id } = router;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
       setEdit(data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
        review: e.target.review.value,
      
    }

    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(review)
    }).then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        navigate("/review")
        toast.success('Updated Successfully');
       
      } else {
        toast.error('Please try again')
      }
    })
    .catch(err => console.log(err))
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
 <Textarea
  className='w-9/12 mx-auto'
    id="comment"
    name="review"
    placeholder="Leave your review..."
    required={true}
    rows={4}
   defaultValue={edit.review}
  />
 
   <div className='w-9/12 mx-auto my-2'>
    <Button className='px-6' type='submit'>
     Update Review
    </Button>
  </div>
 </form>
        </div>
    );
};

export default EditReview;