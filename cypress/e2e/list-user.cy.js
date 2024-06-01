import { LIST_USER } from '../const/routes';
import { BASE_URL } from '../const/routes';

describe('Get list user', () => {
  it('should successfully get list user', () => {
    cy.request({
      method: 'GET',
      url: BASE_URL.baseUrl + LIST_USER.listUser
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal('List of registered users');
      expect(response.body.status).to.equal('SUCCESS_USER_LIST');
    });
  })

  it('should successfully get list user with params username', () => {
    cy.request({
        method: 'GET',
        url: BASE_URL.baseUrl + LIST_USER.listUser +`?username=gavi`
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('List of registered users');
        expect(response.body.status).to.equal('SUCCESS_USER_LIST');
      });
  })

  //////////======//////////////
  it.only('GAGAL MENDAPATKAN LIST USER KARENA USERNAME KOSONG ', () => {
    cy.request({
        method: 'GET',
        url: BASE_URL.baseUrl + LIST_USER.listUser +`?username=`
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('List of registered users');
        expect(response.body.status).to.equal('SUCCESS_USER_LIST');
      });
  })
  //////////======//////////////
  it.only('GAGAL MENDAPATKAN LIST USER KARENA USERNAME BELUM TERDAFTAR', () => {
    cy.request({
        method: 'GET',
        url: BASE_URL.baseUrl + LIST_USER.listUser +`?username=gava`
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('List of registered users');
        expect(response.body.status).to.equal('SUCCESS_USER_LIST');
      });
  })
});