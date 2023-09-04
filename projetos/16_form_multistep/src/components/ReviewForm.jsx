import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'

import './ReviewForm.css'

const ReviewForm = ({data, updatefieldHandler}) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" name="review" value="unsatisfied" checked={data.review === "unsatisfied"} onChange={(e) => updatefieldHandler("review", e.target.value)} required />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="neutral" checked={data.review === "neutral"} onChange={(e) => updatefieldHandler("review", e.target.value)} required />
          <BsFillEmojiNeutralFill /> 
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="satisfied" checked={data.review === "satisfied"} onChange={(e) => updatefieldHandler("review", e.target.value)} required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="very_satisfied" checked={data.review === "very_satisfied"} onChange={(e) => updatefieldHandler("review", e.target.value)} required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" value={data.comment || ""} onChange={(e) => updatefieldHandler("comment", e.target.value)} placeholder="Conte como foi a sua experiência com o produto" required></textarea>
      </div>
    </div>
  )
}

export default ReviewForm