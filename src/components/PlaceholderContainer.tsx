import React from 'react';
import './PlaceholderContainer.css';

interface ContainerProps {
  name: string;
}

const PlaceholderContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>Placeholder Component: {name}</strong>
      <p>Link to Ionic: Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default PlaceholderContainer;
