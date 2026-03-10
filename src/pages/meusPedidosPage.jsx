                  </button>
                  <button
                    onClick={handleSimulatePayment}
                    className="flex items-center justify-center gap-2 bg-green-900 text-white px-4 py-2 rounded hover:bg-green-950"
                  >
                    <FaMoneyBillAlt /> Dinheiro
                  </button>
                </div>
                <button
                  onClick={() => setShowPaymentOptions(false)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MeusPedidosPage;