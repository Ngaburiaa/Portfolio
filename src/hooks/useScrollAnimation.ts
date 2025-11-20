import { useIntersectionObserver } from './useIntersectionObserver';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
}

export const useScrollAnimation = ({
  threshold = 0.3,
  rootMargin = '0px',
  delay = 0,
}: UseScrollAnimationOptions = {}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const getAnimationStyle = () => {
    if (!isIntersecting) {
      return {
        opacity: 0,
        transform: 'translateY(30px)',
        transition: `all 0.6s ease-out ${delay}ms`,
      };
    }
    return {
      opacity: 1,
      transform: 'translateY(0)',
      transition: `all 0.6s ease-out ${delay}ms`,
    };
  };

  return {
    ref,
    isIntersecting,
    getAnimationStyle,
  };
};