import { valentineContent } from '../../../content/valentineContent';

export default function WhyIllNeverLeaveYouSection() {
  const content = valentineContent.interface3.whyIllNeverLeave;

  return (
    <div className="space-y-8 py-8">
      <h2 className="text-3xl font-romantic text-romantic-dark text-center mb-12">
        Why I'll Never Leave You
      </h2>
      
      <div className="bg-gradient-to-br from-white to-soft-pink/20 rounded-2xl p-8 shadow-lg">
        <p className="text-handwritten text-romantic-dark leading-loose whitespace-pre-line text-lg">
          {content.text}
        </p>
      </div>
    </div>
  );
}
