function Error({ mensaje }) {
  return (
    <div className="bg-red-800 text-white text-center p-3 mb-5 rounded-md">
      <p className="capitalize">{mensaje}</p>
    </div>
  );
}

export default Error;
