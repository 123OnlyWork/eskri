import React from 'react';
import resources from '../../data/resources.json';
import MainLayout from '../templates/MainLayout.tsx';

const Resources: React.FC = () => {
    return (
        <MainLayout>
            <h1>Ресурсы</h1>
            <div style={{ padding: '20px 20px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Картинка</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Название ресурса</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Регионы</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map((resource, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                <img 
                                    src={`/pages/${resource.resource}.png`} 
                                    alt={resource.resource} 
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
                                />
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {resource.resource}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {resource.regions.join(', ')}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </MainLayout>
    );
};

export default Resources;
