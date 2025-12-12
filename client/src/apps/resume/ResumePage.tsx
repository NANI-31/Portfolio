export default function Page() {
  return (
    <div className="lg:px-20 px-8 py-10">
      <div className="max-w-[300px]">
        <h1 className="font-semibold text-3xl">
          Let&apos;s have a look at my{" "}
          <span className="hello text-4xl font-normal text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text">
            Resume
          </span>
        </h1>
      </div>
      <div className="py-10">
        <div className="flex justify-center">
          <iframe
            src="https://drive.google.com/file/d/1M7uwlrSu1xiZgIzBIeNG_L15wTTZ4PBS/preview"
            title="PDF Viewer"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
