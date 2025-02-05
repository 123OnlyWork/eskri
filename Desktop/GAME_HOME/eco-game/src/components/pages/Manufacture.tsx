import React from 'react';
import manufacture from '../../data/manufacture.json';
import MainLayout from '../templates/MainLayout.tsx';
import ResourceIcon from '../atoms/ResourceIcon.tsx'; // Убедитесь, что путь правильный

const Manufacture: React.FC = () => {
  // Преобразуем JSON в массив категорий
  const categories = Object.entries(manufacture);

  return (
    <MainLayout>
      <h1>Производство</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {categories.map(([categoryName, products], categoryIndex) => (
          <div key={categoryIndex} className="table-container" style={{ width: '48%', minWidth: '400px' }}>
            <h2>{categoryName}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Готовая продукция</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Материалы для производства</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(products).map(([productName, materials], productIndex) => (
                  <tr key={productIndex}>
                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                      {productName}
                    </td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                      {Array.isArray(materials) ? (
                        materials.map((material, materialIndex) => (
                          <div key={materialIndex} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <ResourceIcon resource={material} />
                            <span>{material}</span>
                          </div>
                        ))
                      ) : (
                        <span>Нет данных</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Manufacture;
