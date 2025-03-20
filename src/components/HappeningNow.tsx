import Article from "./Article";

const HappeningNow = ({ ...props }) => {
  return (
    <div {...props}>
      <h2>HAPPENING NOW</h2>
      <Article
        img=""
        title="Large article title"
        content="Lorem ipsum dolor sit amet..."
        time="2m ago"
      />
    </div>
  );
};

export default HappeningNow;
