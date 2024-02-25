import { useDispatch, useSelector } from 'react-redux';
import { getAllServicesByIssuer } from '../../../store/actions/issuerAction';
import { useEffect, useState } from 'react';
import moment from "moment";
import { Card, Modal } from "antd";
import ServiceInfo from './ServiceInfo';



export default function AllBids() {
  const [visible, setVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const dispatch = useDispatch();
  const bids = useSelector(state => state.issuer.IssuerServices)

  useEffect(() => {
    dispatch(getAllServicesByIssuer())
  }, [dispatch]);

  const showModal = (service) => {
    setSelectedService(service);
    setVisible(true);
    // dispatch(getServiceDetails(String(service.id)));
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <h1 className='font-bold text-3xl text-indigo-500 text-center py-5'> All Services Posted</h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-[60px] mx-auto">
          <div className="flex flex-wrap -m-4">
            {bids.map((service) => (
              <div key={service.id} className="p-4 md:w-1/3">
                <div style={{ backgroundColor: "white", boxShadow: "0px 0px 2px 0px rgba(152, 152, 152, 0.5)" }} className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h2 style={{}} className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                      <h2 style={{ fontWeight: "700", }} className="tracking-widest text-[15px] title-font font-medium text-gray-500 mb-1">Max Bid:{service.amount}</h2>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h1 className="title-font text-lg font-medium text-gray-700 mb-3">{service.title}</h1>

                    </div>
                    <p className="leading-relaxed text-gray-500 mb-3">{service.description.slice(0, 100)}</p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h2 style={{}} className="tracking-widest text-xs title-font font-medium text-gray-450 mb-1">Bid Date:{service.biddingDate ?
                        moment(
                          service.biddingDate
                        ).format('DD-MM-YYYY') : N / A}</h2>
                      <h2 style={{}} className="tracking-widest text-xs title-font font-medium text-gray-450 mb-1">Start-Date:{service.projectStartDate ?
                        moment(
                          service.projectStartDate
                        ).format('DD-MM-YYYY') : N / A}</h2>
                    </div>
                    <div style={{ display: "flex" }}><img style={{ height: "1.7vh", marginTop: "4px" }} src="public\images\google-maps.png" alt="navi-btn" />
                      <h2 className="title-font text-sm font-medium text-gray-700 mb-3">{service.location}</h2></div>
                    <div className="flex items-center flex-wrap">
                      <a
                        onClick={() => showModal(service)}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      <Modal
        title=""
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={600}
        height={1000}
      >
        {selectedService && <ServiceInfo service={selectedService} />}
      </Modal>

    </section>
    </>
  );
}
