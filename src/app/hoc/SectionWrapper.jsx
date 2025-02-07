import ErrorBoundary from "../components/common/ErrorBoundary";

const SectionWrapper = (WrappedComponent) => {
  const HOC = (props) => (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  HOC.displayName = `SectionWrapper(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return HOC;
};

export default SectionWrapper;
