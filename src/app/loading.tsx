const Loading = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>

        <p className="text-[#9CA3AF]">
          Loading workouts...
        </p>
      </div>
    </div>
  );
};

export default Loading;