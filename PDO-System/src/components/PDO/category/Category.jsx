export default function Category({ category }) {
  return (
    <div className="category bg-[#fff] shadow-[0px 0.125rem 0.25rem rgba(0, 0, 0, 0.1)] px-[0.5rem] py-[0.4375rem] rounded-[2.5rem] font-medium text-[1.125rem]">
      {category.title}
    </div>
  );
}
