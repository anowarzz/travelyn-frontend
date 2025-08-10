import registerImage from "@/assets/images/register-image.jpg";
import travelynLogo from "@/assets/logos/travelyn-nav-logo.jpg";
import RegisterForm from "@/components/modules/Authentication/RegisterForm";

const Register = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src={registerImage}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <img src={travelynLogo} className="h-12" alt="Travelyn Logo" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
