export interface ISesionAttrs {
  usuario: {
    id: string;
    isChofer: boolean;
    isAdminGeneral: boolean;
    isAdminEmpresa: boolean;
    isPasajero: boolean;
    isInvitado: boolean;
  };
}