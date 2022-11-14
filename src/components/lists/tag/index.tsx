import { TagItem } from './item';

type Props = {
  tags: string[];
};

const TagList = ({ tags = [] }: Props) => {
  return (
    <div className="flex gap-1">
      {tags.map((tag, index) => (
        <TagItem key={index}>{tag}</TagItem>
      ))}
    </div>
  );
};

export { TagList, TagItem };
