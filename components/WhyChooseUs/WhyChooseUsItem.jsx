import Link from "next/link";

const WhyChooseUsItem = (props) => {
  return (
    <div className="choose-item">
      <div className="choose-icon">
        <img src={props.item.src} alt={props.item.alt} />
      </div>
      <div className="choose-content">
        <h2 className="title">
          <Link href={props.item.link}>{props.item.title}</Link>
        </h2>
        <p>{props.item.description}</p>
      </div>
      {props.item.btn && <button className="btn mt-4">{props.item.btn}</button>}
    </div>
  );
};

export default WhyChooseUsItem;
