import { Link } from "react-router-dom";
import cn from "classnames"; // we can safely use the analogy
import { Row } from "antd"; // ~ "shared/ui/row"

export const TaskRow = ({ data, titleHref }: TaskRowProps) => {
  return (
    <Row className={cn(styles.root, { [styles.completed]: data.completed })}>
      {titleHref ? <Link to={titleHref}>{data.title}</Link> : data.title}
    </Row>
  );
};
