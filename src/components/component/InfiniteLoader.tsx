type Props = {
  loaderRef: React.RefObject<HTMLDivElement>;
  hasMore: boolean;
};

const InfiniteLoader = ({ loaderRef, hasMore }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center py-6"
      ref={loaderRef}
    >
      {hasMore ? (
        <>
          <p className="text-gray-500 text-sm mb-2 animate-pulse">
            Kéo xuống để tải thêm sản phẩm...
          </p>
          <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
        </>
      ) : (
        <p className="text-gray-500 text-sm">Bạn đã xem hết tất cả sản phẩm.</p>
      )}
    </div>
  );
};

export default InfiniteLoader;
