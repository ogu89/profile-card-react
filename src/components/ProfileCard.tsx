export function ProfileCard() {
  // Write custom JavaScript here.
  // You may ignore this file and delete if if JavaScript is not required for your challenge.

  const userObject = {
    name: "Sarah Dole",
    position: "Front End Engineer",
    company: "Microsoft",
    description:
      "I turn coffee into bugs which are fixed by someone else. Certified Stack Oveflow and chatGPT developer",
  };

  return (
    <>
      <div className="flex flex-col gap-y-6 mb-auto w-85 mt-50 items-center gap-4 bg-white  p-5 rounded-lg shadow-sm">
        <img
          className="w-12 h-12 rounded-full"
          src="/profile.png"
          alt="profle-image"
        />
        <div className="flex flex-col text-center gap-1">
          <span className="font-semibold text-xl">{userObject.name}</span>
          <span>
            {userObject.position} @{userObject.company}
          </span>
        </div>
        <span className="text-center">{userObject.description}</span>
      </div>
    </>
  );
}
