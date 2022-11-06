type Props = {
  tags: string[];
};

export const TagList = ({ tags = [] }: Props) => {
  const TagItem = tags.map((tag) => (
    <div
      className="
        my-3
        rounded-xl
        bg-orange-200
        px-2
        py-1
        text-center
        text-xs
        font-bold
        text-orange-400
      "
    >
      <div>{tag}</div>
    </div>
  ));

  return <div className="flex gap-1">{TagItem}</div>;
};
