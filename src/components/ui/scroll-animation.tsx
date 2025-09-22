import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'slideUpStagger';
  delay?: number;
  duration?: number;
  className?: string;
}

const animationClasses = {
  fadeIn: 'opacity-0 translate-y-8',
  slideUp: 'opacity-0 translate-y-12',
  slideLeft: 'opacity-0 -translate-x-12',
  slideRight: 'opacity-0 translate-x-12',
  scaleIn: 'opacity-0 scale-95',
  slideUpStagger: 'opacity-0 translate-y-8'
};

const animationTransitions = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideLeft: 'animate-fade-in-left',
  slideRight: 'animate-fade-in-right',
  scaleIn: 'animate-scale-in',
  slideUpStagger: 'animate-fade-in'
};

export const ScrollAnimation = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0,
  duration = 800,
  className = '' 
}: ScrollAnimationProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  const baseClasses = 'transition-all duration-700 ease-out';
  const initialClasses = animationClasses[animation];
  const finalClasses = isIntersecting ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : initialClasses;

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${finalClasses} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

// Componente para animações em sequência (stagger)
export const StaggeredAnimation = ({ 
  children, 
  staggerDelay = 100,
  className = ''
}: {
  children: ReactNode[];
  staggerDelay?: number;
  className?: string;
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation
          key={index}
          delay={index * staggerDelay}
          animation="slideUpStagger"
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
};
